// Let's create a test for the person.ts module we created in (4)

import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import Person, { sayHello } from "./4importing-js-modules/person";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace!", sayHello(grace));
});