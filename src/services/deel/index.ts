import { deel } from "../../config/deel";

interface Endpoint {
  id: string;
  name: string;
  url: string;
  headers?: string[];
  params?: string[];
  queryParams?: string[];
  body?: string[];
}

export const userEndpoints: Record<string, Endpoint> = {
  FIND_ONE_CONTRACT: {
    id: "GET contracts/:id",
    name: "find one contract",
    url: deel.baseUrl.concat("/", "/contracts/:id"),
    headers: ["profile_id"],
    params: ["id"],
  },
  FIND_ALL_CONTRACT: {
    id: "GET contracts",
    name: "find all acitve contracts for a user",
    url: deel.baseUrl.concat("/", "contracts"),
    headers: ["profile_id"],
  },
  FIND_ALL_JOBS: {
    id: "GET jobs/unpaid",
    name: "find all unpaid jobs for a user",
    url: deel.baseUrl.concat("/", "jobs/unpaid"),
    headers: ["profile_id"],
  },
  PAY_JOB: {
    id: "POST jobs/:job_id/pay",
    name: "pay for a job",
    url: deel.baseUrl.concat("/", "jobs/:job_id/pay"),
    headers: ["profile_id"],
    params: ["job_id"],
  },
  MAKE_DEPOSTI: {
    id: "POST balances/deposit/:userId",
    name: "make a deposit",
    url: deel.baseUrl.concat("/", "balances/deposit/:userId"),
    headers: ["profile_id"],
    params: ["userId"],
    body: ["amount"],
  },
};

export const adminEndpoints: Record<string, Endpoint> = {
  BEST_PAYED: {
    id: "GET admin/best-profession",
    name: "find best payed profession",
    url: deel.baseUrl.concat("/", "admin/best-profession"),
    headers: ["x-api-key"],
    queryParams: ["start", "end"],
  },
  BEST_PAYS: {
    id: "GET admin/best-clients",
    name: "find best paying clients",
    url: deel.baseUrl.concat("/", "admin/best-clients"),
    headers: ["x-api-key"],
    queryParams: ["start", "end", "limit"],
  },
};

export default { userEndpoints, adminEndpoints };
