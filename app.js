const posts = document.querySelectorAll(".card_util");
const dots = document.querySelectorAll(".dot");
const unreadPosts = document.querySelectorAll(".card__unread");
const markAsRead = document.querySelector(".mark_as_read");
const unreadCount = document.querySelector("#unread_count");

function countUnread() {
  let unread = 0;
  unreadPosts.forEach((post) => {
    unread++;
  });
  unreadCount.innerHTML = unread;
}

markAsRead.addEventListener("click", clearUnread);
countUnread();

function clearUnread() {
  posts.forEach((post) => post.classList.remove("card__unread"));
  dots.forEach((dot) => (dot.style.display = "none"));
  unread = 0;
  unreadCount.innerHTML = unread;
}
