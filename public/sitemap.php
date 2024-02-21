<?php

header("Content-Type: application/xml; charset=utf-8");

// Your API endpoint for dynamic routes
$apiEndpoint = 'https://api.servicex.co.nz/admin/service';

// Function to fetch dynamic route data from the API
function fetchDynamicRouteData()
{
    $apiEndpoint = $GLOBALS['apiEndpoint'];

    // Your API call logic here to fetch dynamic route data
    // Replace this with your actual API request logic
    $response = file_get_contents($apiEndpoint);
    $data = (array) json_decode($response, true);

    return $data['data'];
}

// Function to generate the sitemap XML
function generateSitemap()
{
    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Generate URLs for static routes
    $staticRoutes = [
        ['path' => '/', 'changefreq' => 'daily', 'priority' => '1.0'],
        ['path' => '/appointment', 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['path' => '/about', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/services', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/contact', 'changefreq' => 'monthly', 'priority' => '0.5'],
        // Add more static routes as needed
    ];

    foreach ($staticRoutes as $route) {
        $xml .= '<url>';
        $xml .= '<loc>https://servicex.co.nz' . $route['path'] . '</loc>';
        $xml .= '<changefreq>' . $route['changefreq'] . '</changefreq>';
        $xml .= '<priority>' . $route['priority'] . '</priority>';
        $xml .= '</url>';
    }

    // Generate URLs for dynamic routes from the API
    $dynamicRouteData = fetchDynamicRouteData();

    foreach ($dynamicRouteData as $item) {
        $slug = $item['serviceSlug']; // Adjust based on your API response structure
        $xml .= '<url>';
        $xml .= '<loc>https://servicex.co.nz/service/' . $slug . '</loc>';
        $xml .= '<changefreq>daily</changefreq>'; // Adjust as needed
        $xml .= '<priority>0.7</priority>'; // Adjust as needed
        $xml .= '</url>';
    }

    $xml .= '</urlset>';

    return $xml;
}

// Output the generated sitemap
echo generateSitemap();
