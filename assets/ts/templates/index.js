export const html = `
<header>
    <form method="get" id="changeLang" class="flex_end">
        <div class="input_group" id="selectLang">
            <label for="lang">{{ lang }}</label>
            <select name="lang" onmousedown="(function(e){ e.preventDefault(); })(event, this)">
                <option value="en"></option>
                <option value="de"></option>
                <option value="fr"></option>
                <option value="es"></option>
                <option value="pt"></option>
            </select>
        </div>
    </form>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
</header>
<section>
    <form novalidate id="generateQRCode" class="flex_center">
        <div>
            <input type="url" name="url" placeholder="https://qrcode.partez.net" required />
            <p class="input_error" id="qrcode__error"></p>
        </div>
        <div class="input__main">
            <div class="input_group" id="qrcode__type">
                <label for="format">{{ format }}</label>
                <select name="format">
                    <option data-function="printSVG" value="svg">SVG</option>
                    <option data-function="printIMG" value="png">PNG</option>
                    <option data-function="printIMG" value="jpeg">JPG</option>
                    <option data-function="printIMG" value="webp">Webp</option>
                </select>
            </div>
            <div id="qrcode__width" hidden>
                <div class="input_group">
                    <label for="width">{{ width }}</label>
                    <input name="width" type="number" min="0" max="512" value="512" />
                    <p>px</p>
                </div>
            </div>
        </div>
        <button type="submit">{{ generate }}</button>
    </form>
    <div id="qrcode__container"></div>
    <div id="qrcode__downloader">
        <button type="button" hidden>{{ download }}</button>
    </div>
</section>
<footer class="flex_center">
    <div>
        {{ coded }} <a href="mailto:abollinger@partez.net">Antoine Bollinger</a>&nbsp;|&nbsp;
        <a href="https://github.com/Antoine-Bollinger/qrcode"><i class="fa-brands fa-github"></i></a>&nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/antoinebollinger/"><i
                class="fa-brands fa-linkedin"></i></a>&nbsp;|&nbsp;
        <a href="https://partez.net">partez.net</a>
    </div>
    <div>
        <em><small>{{ generated }}</small></em>
    </div>
</footer>
<dialog>
    <div class="dialog__body">
        <div>
            <p class="close_input"><span class="flex">X</span></p>
            <br>
            <form class="flex_start">
                <div class="flex">
                    <input type="radio" name="lang" value="en" id="en" onchange="this.form.submit()" />
                    <label for="en">English</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="de" id="de" onchange="this.form.submit()" />
                    <label for="de">Deutsch</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="fr" id="fr" onchange="this.form.submit()" />
                    <label for="fr">Français</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="es" id="es" onchange="this.form.submit()" />
                    <label for="es">Español</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="pt" id="pt" onchange="this.form.submit()" />
                    <label for="pt">Português</label>
                </div>
            </form>
        </div>
    </div>
</dialog>
`