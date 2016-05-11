What is an "Initiative Radiator"?
=================================

An initiative radiator is a way to show progress toward a set of large, nebulous
goals. When you're in the weeds of a long, drawn-out project, it can be hard to
see the light at the end of the tunnel. That's where a radiator can help.

Progress is represented as a set of milestones. You start at zero, and as you
make progress, the mercury gradually fills the thermometer. You can have
multiple initiatives in parallel.

Setup instructions
------------------

1. Edit data.json with details for each initiative you want to display
2. Reset the `step` variable to 0 for each initiative
3. Open index.html in a browser to ensure that the initiatives display correctly
4. Deploy to a static web server of your choice

Maintaining the initiatives
---------------------------

The `step` variable attached to each initiative determines how much mercury
is showing. Zero displays an empty thermometer. Increment by one each time you
complete a milestone.

That's it. Have fun!
