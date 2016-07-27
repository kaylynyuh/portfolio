page('/', index);
page('/about', work);
page();

function index() {
  articleController.reveal();
}

function work() {
  aboutController.reveal();
}
