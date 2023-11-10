Deno.serve((_request: Request) => {
    return new Response("Hello-world");
});

//It will start running on port 8000