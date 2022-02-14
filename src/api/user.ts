import service from "/@src/utils/request";

export async function getProfile(): Promise<any> {
  const res = await service({
    url: "/user/profile",
    method: "get",
  });

  return res.data;
}
