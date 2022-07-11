export interface Job {
  slug: string;
  title: string;
  id: string;
  tags: {
    name: string;
    __typename: string;
  }[];
  commitment: {
    title: string;
    __typename: string;
  };
  company: {
    name: string;
    slug: string;
    logoUrl: null | string;
    __typename: string;
  };
  cities: {
    name: string;
    id: string;
    __typename: string;
  }[];
  countries: {
    name: string;
    __typename: string;
  }[];
  remotes: [
    {
      type: string;
      __typename: string;
    }[]
  ];
  __typename: string;
}
