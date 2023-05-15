import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <table class="reachmeout">
        <tr>
          <td>
            <a
              href="https://drive.google.com/file/d/1ZNqA5WBApC4tg9dBJMBt55gycBJsxn4N/view?usp=sharing"
              class="stylisethisbutton"
              title="Android App"
            >
              <i class="fab fa-android"></i>
            </a>
          </td>
          <td>
            <a
              href="https://portfolio-ce6f9.web.app/"
              class="stylisethisbutton"
              title="Portfolio"
            >
              <i class="fa fa-link"></i>
            </a>
          </td>
          <td>
            <a
              href="https://github.com/harshpandit2004/batsignal-whole"
              class="stylisethisbutton"
              title="Github"
            >
              <i class="fab fa-github"></i>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
