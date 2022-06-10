class ButtonTextPlusElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const plusPosition = (this.getAttribute('plus-position') ? this.getAttribute('plus-position') : '-left-[42px] group-hover:-left-16' );
        const textColor = (this.getAttribute('text-color') ? this.getAttribute('text-color') : 'text-white' );

        this.innerHTML = `
            <div class="group hover:cursor-pointer flex justify-start items-center transition-all duration-300">
                <div class="mr-[3px] leading uppercase ${textColor} font-gotham_bold text-base md:text-lg xl:text-[20px] leading-tight group-hover:text-amarelopastel transition-all duration-300">${this.getAttribute('label')}</div>
                <div class="flex justify-start items-center p-2 rounded-full bg-transparent ${plusPosition} group-hover:bg-amarelolimao2 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-[4px] block fill-white group-hover:fill-azulescuro transition-all duration-300" width="34.08" height="34.08" viewBox="0 0 34.08 34.08"><path d="M19.04,32.672A13.632,13.632,0,1,1,32.672,19.04,13.65,13.65,0,0,1,19.04,32.672M19.04,2A17.04,17.04,0,1,0,36.08,19.04,17.04,17.04,0,0,0,19.04,2m1.7,8.52H17.336v6.816H10.52v3.408h6.816V27.56h3.408V20.744H27.56V17.336H20.744Z" transform="translate(-2 -2)"/></svg>
                    <span class="leading-none uppercase font-gotham_bold text-azulescuro opacity-0 group-hover:opacity-100">veja<br>mais</span>
                </div>
            </div>`;
        }
    }
    window.customElements.define('wc-btn_textplus', ButtonTextPlusElement);