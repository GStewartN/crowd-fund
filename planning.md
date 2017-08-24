## Planning
  1. App Architecture
    * 3 Models: Project, Idea, Charity
    * app.routing.ts file
      <!--appRoutes
        '' -- Splash
        'projects' -- ProjectListComponent
        'ideas' -- IdeaListComponent
        'charities' - CharityListComponent
        'projects/:id' - ProjectDetailComponent
        'ideas/:id' - IdeaDetailComponent
        'charities/:id' - CharityDetailComponent
        'admin' - AdminComponent
      -->
    * Root Component ('/')
      * Navbar - Routes to Following Components
        * Project-List
          * Route to Project-Detail Component, using service
          * Add New Project Form
        * Idea-List
          * Route to Idea-Detail Component, using service
          * Add New Idea Form
        * Charity-List
          * Route to Charity-Detail Component, using service
          * Add new Charity Form
      * Footer - Routes to Admin Component
    * Splash Component  

    * Admin Component
      * 3 Columns for each Object Type
        * Each column contains add-new form, with list of all object of that type underneath, with edit & delete buttons.
          * Potentially use a variable value to hide/show buttons for user vs. admin view.
    * Project Service
    * Idea Service
    * Charity Service

    * firebase api-keys.ts file, included in .gitignore
