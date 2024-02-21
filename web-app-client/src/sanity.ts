import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

export const client = createClient({
  projectId: "8ykick5k",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07",
});

const builder = imageUrlBuilder(client);

export function urlFor(source : Image) {
  return builder.image(source);
}


