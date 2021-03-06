/// <reference path="bootstrap.js" />
/// <reference path="jquery-2.1.0.js" />
/// <reference path="knockout-3.0.0.debug.js" />

/// <reference path="require.js" />
requirejs.config({

    baseUrl: "/",

    paths: {
        'jquery': 'Scripts/jquery-2.0.3',
        'knockout': 'Scripts/knockout-3.0.0.debug',
        'text': 'Scripts/text',
        'durandal': 'Scripts/durandal',
        'plugins': 'Scripts/durandal/plugins',
        'transitions': 'Scripts/durandal/transitions',
        'ocpkmlib': 'Scripts/ocpkmlib',
        'iPortal': 'App/iPortal',
        'tools': 'App/tools',
        'viewmodels': 'App/viewmodels',
        'views': 'App/views'
    }
});

