import service from "/@src/utils/request";

import { PageInfo, PageList } from "/@src/models/requestCommon";

import { LoginForm } from "/@src/models/managerRequestBody";

export async function login(payload: LoginForm): Promise<any> {
  const res = await service({
    url: "/login",
    method: "post",
    data: payload,
  });

  return res.data;
}

export async function getTodos(payload: PageInfo): Promise<PageList> {
  const res = await service({
    url: "/login",
    method: "get",
    params: payload,
  });

  return res.data;
}
