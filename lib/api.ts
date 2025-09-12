// Set a variable that contains all the fields needed for posts when a fetch for
// content is performed
const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  subTitle
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for posts with an "posts" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

export async function getBlogPosts(
  // For this demo set the default limit to always return 3 posts.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing posts before they are live
  isDraftMode = false
) {
  const posts = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${BLOG_POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(posts);
}

export async function getBlogPost(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${BLOG_POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}
