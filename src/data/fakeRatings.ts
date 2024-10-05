import type { Rating } from "@domain/entities/rating";

export const fakeRatings: Rating[] = [
  {
    id: "99ec24e2-479b-438e-8f0c-cafcf02b6be1",
    rating: 4.5,
    comment: "Great service!",
    createdOn: new Date(),
    name: "John Doe",
    email: "john.doe@emails.com"
  },
  {
    id: "99ec24e2-479b-438e-8f0c-cafcf02b6be2",
    rating: 1.0,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id bibendum neque, vitae finibus tellus. Nulla eu velit tincidunt, tincidunt est in, tincidunt orci. In elit arcu, dignissim a lectus ultricies, maximus mollis leo. Quisque scelerisque finibus arcu, vitae consequat turpis luctus ac. Nam sit amet erat congue, hendrerit sem a, vestibulum mauris. Mauris sed turpis in nunc ultrices tincidunt et id velit. Pellentesque hendrerit velit non tortor tempus, at condimentum turpis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    createdOn: new Date(),
    name: "Jane Doe",
    email: "jane.doe@email.com"
  },
  {
    id: "99ec24e2-479b-438e-8f0c-cafcf02b6be3",
    rating: 3.0,
    comment: "Will definitely come back",
    createdOn: new Date(),
    name: "John Doe",
    email: "john@gmail.com"
  },
  {
    id: "99ec24e2-479b-438e-8f0c-cafcf02b6be4",
    rating: 2.5,
    comment: "Not bad",
    createdOn: new Date(),
    name: "Jane Doe",
    email: "jane@mail.com"
  },
  {
    id: "99ec24e2-479b-438e-8f0c-cafcf02b6be5",
    rating: 5.0,
    comment: "Excellent service",
    createdOn: new Date(),
    name: "John Doe",
    email: "john@mail.com"
  }

];
