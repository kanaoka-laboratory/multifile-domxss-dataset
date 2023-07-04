import { source } from "./source.js";
import { sink } from "./sink.js";

const payload = source();
sink(payload);