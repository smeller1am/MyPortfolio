const API_URL = import.meta.env.PUBLIC_API ?? "";

export type CartResponse = {
  count: number;
  sum: number;
  product_id: number;
  product: {
    link: "https://app-room.spaceapp-dev.com/product/apple-iphone-14-plus-512gb-purple/";
    "data-id": number;
    "data-var": number;
    "data-category": number | null;
    img: string;
    title: string;
    price: number;
    sale: number;
  };
  variation: number;
};

type CompareResponse = {
  count: number;
  category_id: number;
  product_id: number;
};

export async function cartAdd(
  id: number,
  variation?: number,
  quantity?: number,
) {
  const res = await fetch(API_URL + "/wp-json/appRoomApi/v1/cart/add", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, variation, quantity }),
  });

  if (res.ok) {
    const data: CartResponse = await res.json();
    console.log(data);
    return data;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}

export async function cartDelete(id: number, variation?: number) {
  const res = await fetch(API_URL + "/wp-json/appRoomApi/v1/cart/delete", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, variation }),
  });

  if (res.ok) {
    const data: CartResponse = await res.json();
    console.log(data);
    return data;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}

export async function cartHasProduct(id: number, variation?: number) {
  const res = await fetch(
    API_URL + "/wp-json/appRoomApi/v1/cart/check-in-cart",
    {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, variation }),
    },
  );

  if (res.ok) {
    const data: "true" | "false" = await res.json();
    console.log(data);
    return data === "true" ? true : false;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}

export async function compareAdd(product_id: number, category_id: number) {
  const res = await fetch(API_URL + "/wp-json/appRoomApi/v1/comparison/add", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product_id, category_id }),
  });

  if (res.ok) {
    const data: CompareResponse = await res.json();
    console.log(data);
    return data;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}

export async function compareDelete(product_id: number, category_id: number) {
  const res = await fetch(
    API_URL + "/wp-json/appRoomApi/v1/comparison/delete",
    {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, category_id }),
    },
  );

  if (res.ok) {
    const data: CompareResponse = await res.json();
    console.log(data);
    return data;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}
export async function deleteTab(id: number) {
  const res = await fetch(
    API_URL + "/wp-json/appRoomApi/v1/comparison/delete-tab",
    {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tab_id: id }),
    },
  );

  if (res.ok) {
    const data: CompareResponse = await res.json();
    console.log(data);
    return data;
  } else {
    const { error } = await res.json();
    throw new Error(error, { cause: error });
  }
}

export async function getApi() {
  try {
    await fetch(API_URL + "/wp-json/appRoomApi/v1/");
  } catch {}
}

export async function sendForm(formData: FormData) {
  const res = await fetch(API_URL + "/wp-content/themes/app-room-sa/mail.php", {
    credentials: "include",
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = (await res.json()) as {
      response: string;
      order_id: number;
    };
    return data;
  } else {
    throw new Error("form send error");
  }
}

export async function sendTradeInForm(formData: FormData) {
  const res = await fetch(API_URL + "/wp-content/themes/app-room-sa/mail.php", {
    credentials: "include",
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("form send error");

  return res.text();
}

export async function sendOrder(formData: FormData) {
  const res = await fetch(
    API_URL + "/wp-content/themes/app-room-sa/makeOrder.php",
    {
      credentials: "include",
      method: "POST",
      body: formData,
    },
  );

  if (res.ok) {
    const data = (await res.json()) as {
      response: string;
      order_id: number;
    };
    return data;
  } else {
    throw new Error("form send error");
  }
}

export type Product = {
  "data-category": number;
  "data-id": number;
  img: string | null;
  link: string | null;
  price: number | null;
  sale: number | null;
  title: string | null;
};

export async function sendFilters(formData: any) {
  const res = await fetch(API_URL + `/wp-json/appRoomApi/v1/filters`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });

  if (res.ok) {
    const data: {
      count: number;
      products: Product[];
      minPrice: string;
      maxPrice: string;
    } = await res.json();
    return data;
  } else {
    throw new Error("form send error");
  }
}
export async function sendSearchFilters(formData: any) {
  const res = await fetch(API_URL + `/wp-json/appRoomApi/v1/search`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });

  if (res.ok) {
    const data: {
      count: number;
      products: Product[];
      minPrice: string;
      maxPrice: string;
    } = await res.json();
    return data;
  } else {
    throw new Error("form send error");
  }
}
