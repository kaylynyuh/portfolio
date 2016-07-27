page('/', about);
page('/work', work);
page('/skills', skills);
page('/contact', contact);
page();

function about() {
  aboutController.reveal();
}

function work() {
  workController.reveal();
}

function skills() {
  skillsController.reveal();
}

function contact() {
  contactController.reveal();
}
