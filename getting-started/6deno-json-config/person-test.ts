import {assertEquals} from `$std/assert/mod.ts`;
import Person, {sayHello} from '../4importing-js-modules/person';

Deno.test("sayHello functiom", () => {
    const grace: Person = {
        lastName: "Hopper",
        firstName: "Grace"
    }
    assertEquals("Hello, Grace!", sayHello(grace));
});