import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getCategory() {
  return client.fetch(
    groq`*[_type == "category"]{title}`
  );
}