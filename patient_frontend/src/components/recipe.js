import React from "react";
const Recipe = ({ image, title, calories, ingredients }) => {
  return (
    <div className="container-md">
      <div
        class="d-md-card p-2 card shadow-lg p-3 mb-5 bg-body rounded border-secondary mb-3-md "
        style={{
          width: "18rem",
          margin: "4rem"
        }}
      >
        <h5 class="card-title ">{title}</h5>
        <ul class="list-group list-group-flush">
          Calories:<li class="list-group-item">{calories}</li>
        </ul>
        <img src={image} class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="card-text">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Show ingredients
                  </button>{" "}
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    {" "}
                    <ol>
                      {ingredients?.map((ingredient) => (
                        <li>{ingredient.text}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
