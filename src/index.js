
import { createEffect, createSignal } from "solid-js";

const [first, setFirst] = createSignal("JSON");
const [last, setLast] = createSignal("JEREMY");

createEffect(() => document.write(`${first()} ${last()}`));
