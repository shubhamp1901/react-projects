1. Folder structure
2. React router using v6 and following the new conventions
3. Create AppLayout as i want header and cartoverview to be seen in every page and use outlet to display child route content
4. Include Applayout at the top of the routes and make other routes it's children and i want applayout to be common on all pages.
5. Using Render-as-You-Fetch for fetching the data from API which is given by react router dom
   1. Using loader function
   2. Create loader function in the component
   3. import it in the routes using (loader: ) under that component where you want to fetch the data
   4. useLoaderData hook provided by RRD use it to get the data to your component
6. To make post request we use Form provided by RRD. It's like your html form.
7. Create a action function import it in your route.
8. RRD gives us request param by using it we can get formData.
