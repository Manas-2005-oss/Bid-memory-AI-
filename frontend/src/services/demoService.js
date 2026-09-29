import { demoRfps } from "../data/demoRfps";
import { demoMemories } from "../data/demoMemories";
import { demoKnowledge } from "../data/demoKnowledge";
import { demoInsights } from "../data/demoInsights";

export async function getDemoRFPs() {
  return Promise.resolve(demoRfps);
}

export async function getDemoMemories() {
  return Promise.resolve(demoMemories);
}

export async function getDemoKnowledge() {
  return Promise.resolve(demoKnowledge);
}

export async function getDemoInsights() {
  return Promise.resolve(demoInsights);
}

export async function approveDemoResponse() {
  return Promise.resolve({
    success: true,
    message: "Response approved and memory updated.",
  });
}