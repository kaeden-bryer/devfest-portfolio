/**
 * CHALLENGE 4: Build the Projects Section
 * Component Composition & Grid Layouts
 * We're going to build a complex UI by composing smaller components (`ProjectCard`)
 * inside a larger layout structure using CSS Grid.
 * 1. `grid-cols-1`: 1 column on mobile.
 * 2. `md:grid-cols-2`: 2 columns on tablet.
 * 3. `lg:grid-cols-3`: 3 columns on desktop.
 *
 * This component should:
 * 1. Loop (what method did we use last time) through the projects array
 * 2. Render a ProjectCard for each project
 * 3. Display them in a responsive grid
 * 4. Experiment with the grid classes to change the layout
 *
 * We're missing a few things we did in previous lessons...
 * How do we get access to the `projects` array here???
 * How would we display the component for each project???
 *
 */

export const ProjectsDefault = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 
          TODO: Loop over your projects here! 
        */}

        <div className="col-span-full text-center p-12 border-2 border-dashed border-slate-300 rounded-xl">
          <p className="text-xl text-slate-500">
            Your projects grid is empty. Time to write some code! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
