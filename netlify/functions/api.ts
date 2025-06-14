import { Handler } from '@netlify/functions';
import { storage } from '../../server/storage';

export const handler: Handler = async (event, context) => {
  const { path, httpMethod, body, queryStringParameters } = event;
  
  // Remove /api prefix and /.netlify/functions/api prefix
  const apiPath = path.replace(/^\/\.netlify\/functions\/api/, '').replace(/^\/api/, '');
  
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Route handling
    if (apiPath === '/articles' && httpMethod === 'GET') {
      const articles = await storage.getArticles();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(articles),
      };
    }

    if (apiPath === '/articles/recent' && httpMethod === 'GET') {
      const limit = queryStringParameters?.limit ? parseInt(queryStringParameters.limit) : 3;
      const articles = await storage.getRecentArticles(limit);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(articles),
      };
    }

    if (apiPath.startsWith('/articles/') && httpMethod === 'GET') {
      const slug = apiPath.replace('/articles/', '');
      const article = await storage.getArticleBySlug(slug);
      if (!article) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Article not found' }),
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(article),
      };
    }

    if (apiPath === '/pension-calculations' && httpMethod === 'POST') {
      const calculationData = JSON.parse(body || '{}');
      const calculation = await storage.createPensionCalculation(calculationData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(calculation),
      };
    }

    if (apiPath === '/newsletter' && httpMethod === 'POST') {
      const subscriptionData = JSON.parse(body || '{}');
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(subscriptionData.email);
      if (existing) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Email already subscribed' }),
        };
      }

      const subscription = await storage.createNewsletterSubscription(subscriptionData);
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(subscription),
      };
    }

    if (apiPath === '/stats' && httpMethod === 'GET') {
      const stats = await storage.getSystemStats();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(stats),
      };
    }

    // Route not found
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Route not found' }),
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};