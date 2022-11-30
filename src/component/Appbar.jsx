import React from 'react';

export default function Appbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">
          Animeku
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./list-film.html">
                Top Anime
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
