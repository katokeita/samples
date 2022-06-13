// JavaScript Document

console.log('This is sw1.js');

// Service Worker インストール時に実行される
self.addEventListener('install', (event) => {
    console.log('service worker install ...');
});

// Service Worker アクティベート時に実行される
self.addEventListener('activate', (event) => {
  console.info('activate', event);
  console.log('activate');
});

self.addEventListener('fetch', (event) => {
    console.log('service worker fetch ... ' + event.request);
});