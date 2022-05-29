import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "p3deczop",
  dataset: "production",
  apiVersion: "2022-05-13",
  useCdn: true,
  token:
    "skKtUi51qNbANXCbU1g6UmYbHobjQ5hXvrJOIqtW10IyKy99JnMiZvxkQ9ai5EeVFLnOrq9sQf0OvCq7k19YpG26sQp9rUWREVKTHfiREj55WlVQV4bmoH7L37b8O395MqvCoe7mRi0F0xBkpsLgSdQnLMbreNuyrTv77fDMlkH824QkDN7K",
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);
