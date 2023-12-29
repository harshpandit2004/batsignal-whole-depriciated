import React from "react";
import fileDownload from "js-file-download";

export default function Navbar() {
  return (
    <div className="Navbar">
      <table class="reachmeout">
        <tr>
          <td>
            <button
              class="stylisethisbutton"
              title="Android App"
              onClick={() => {
                fetch("https://drab-rose-sheep-tam.cyclic.app/android", {
                  method: "GET",
                  responseType: "blob",
                }).then((res) => {
                  fileDownload(res.data, "batsignal.apk");
                });
              }}
            >
              <i class="fab fa-android"></i>
            </button>
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
