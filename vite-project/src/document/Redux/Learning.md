### Learning 1

But when your React app (running on http://localhost:5173) calls it via Axios:

localhost:5173  →  jsonplaceholder.typicode.com

That becomes a cross-origin AJAX request.

# Before
const response = await axios.get(
                // "https://jsonplaceholder.typicode.com/todos" 
);


# FIX https --> http

const response = await axios.get(
                // "http://jsonplaceholder.typicode.com/todos" 
);
