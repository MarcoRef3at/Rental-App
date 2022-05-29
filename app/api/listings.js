import client from "./client";
import endPoints from "./endPoints";

const getListings = () => client.get(endPoints.getList);

const getListTypeAndCategory = () =>
  client.post(endPoints.getListTypeAndCategory);

export const addListing = (listing, onUploadProgress) => {
  // const data = new FormData();
  // data.append("title", listing.title);
  // data.append("price", listing.price);
  // data.append("categoryId", listing.category.value);
  // data.append("description", listing.description);

  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   })
  // );
  let data = {
    Nm: "",
    TpID: listing.type.ID,
    Gst: listing.guestNumber,
    BdRm: listing.bedroomNumber,
    BtRm: listing.bathroomNumber,
    Dsc: "",
    Pb: false,
  };
  console.log("data:", data);
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  return client.post(
    endPoints.addList,
    data
    // {
    // onUploadProgress: (progress) =>
    //   onUploadProgress(progress.loaded / progress.total),
    // }
  );
};

export default {
  addListing,
  getListings,
  getListTypeAndCategory,
};
