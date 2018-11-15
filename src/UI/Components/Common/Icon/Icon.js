/* eslint-disable */
import * as React from 'react'

const ICONS = {
    Gmail: "M24 4.5v15c0 .8-.7 1.5-1.5 1.5H21V7.4l-9 6.5-9-6.5V21H1.5C.6 21 0 20.4 0 19.5v-15c0-.4.2-.8.4-1 .3-.3.7-.5 1.1-.5H2l10 7.3L22 3h.5c.4 0 .8.2 1 .4.3.3.5.7.5 1.1z",
    GitHub: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3",
    Twitter: "M24 4.6c-1 .4-1.9.6-2.9.7a5 5 0 0 0 2.2-2.7c-1 .6-2 1-3.1 1.2-1-1-2.2-1.6-3.6-1.6a5 5 0 0 0-4.8 6 14 14 0 0 1-10.2-5c-.4.7-.6 1.5-.6 2.4a5 5 0 0 0 2.2 4.1c-.8 0-1.6-.2-2.3-.6A5 5 0 0 0 5 14a5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2 14 14 0 0 0 7.6 2.3c9 0 14-7.5 14-14V7A10 10 0 0 0 24 4.6z",
    CodePen: "M24 8.18l-.02-.08-.02-.05c0-.03-.01-.06-.03-.08l-.02-.05-.03-.07-.03-.05-.04-.06-.05-.04-.06-.05-.05-.03-.06-.04-.04-.04-.01-.02L12.57.19c-.35-.23-.8-.23-1.14 0L.45 7.5l-.01.02-.05.03-.06.05-.03.04-.05.06-.04.04-.05.06c-.02.02-.03.03-.03.05l-.05.06-.02.06c-.02 0-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.5l.01.13.01.05.02.08.01.05.03.08.02.05.03.06.03.04c.02 0 .03.04.05.06l.03.04.04.04c0 .01 0 .03.03.03l.06.04.04.03v.01L11.4 23.8c.16.12.37.17.57.17s.39-.06.57-.18l10.99-7.28.01-.01.05-.04.06-.04.05-.04.05-.06.03-.04.04-.06.03-.05.03-.07.02-.05.03-.08.01-.05.03-.08v-7.5l-.01-.14-.02-.04h.05zm-11.99 6.28l-3.65-2.44 3.65-2.44 3.65 2.44-3.65 2.44zM10.98 7.8L6.5 10.78 2.9 8.36l8.09-5.39V7.8zm-6.33 4.23l-2.59 1.73V10.3l2.59 1.73zm1.85 1.25l4.48 3v4.81L2.89 15.7l3.62-2.42zm6.54 3l4.47-2.99 3.62 2.42-8.09 5.4v-4.83zm6.33-4.24l2.58-1.72v3.46l-2.58-1.73zm-1.86-1.24L13.04 7.8V2.97l8.09 5.39-3.61 2.42z",
    Replit: "M.5 13.5S.5 9.2 2 6.3s5-5 5-5h.7s3.6-.8 6.5 1.4a6.6 6.6 0 0 1 3.6 5v5s0-3.5-2.2-5.7c-2.1-1.4-4.3-2.2-7.2-2.2S3.4 7 3.4 7L2 9.9.5 13.5zm23-2.9s0 4.3-1.4 7.2-5 5-5 5h-.7s-3.6.8-6.5-1.4a6.6 6.6 0 0 1-3.6-5v-5s0 3.5 2.1 5.7c2.2 1.4 4.4 2.1 7.2 2.1s5-2.1 5-2.1l1.5-2.9 1.5-3.6zM10.7.6s4.3 0 7.2 1.4 5 5 5 5v.7s0 3.6-1.4 6.5-4.3 3.6-5 3.6h-5s3.5 0 5.7-2.2c1.4-2.1 2.1-4.3 2.1-7.2s-2.8-5-2.8-5S15.6 2 14.2 2L10.6.5zm2.9 23s-4.3 0-7.2-1.5-5-5-5-5v-.7s-.8-3.6 1.4-6.5a6.6 6.6 0 0 1 5-3.6h5S9.3 6.3 7 8.4a12.2 12.2 0 0 0-2.2 7.2 8.6 8.6 0 0 0 5 6.5l3.7 1.5zM15.6 12a3.6 3.6 0 0 1-3.6 3.6A3.6 3.6 0 0 1 9.2 12 3.6 3.6 0 0 1 12 9.2a3.6 3.6 0 0 1 3.6 2.8z",
    LinkedIn: "M20.45 20.45h-3.56v-5.57c0-1.32-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.35V9h3.42v1.56h.04a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    git: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
    javascript: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    react: "M9.861,12a2.139,2.139 0 1,0 4.278,0a2.139,2.139 0 1,0 -4.278,0 M6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z M5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545z M18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501z M12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z",
    vue: "M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608",
    css3: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
    html5: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
    angularjs: "M9.93 12.645h4.134L11.996 7.74 M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z",
    gulp: "M15.156 19.432l.636-1.084s-1.444.591-3.86.591c-2.418 0-3.84-.568-3.84-.568l.711 1.183.252 3.729c0 .403 1.314.718 2.936.718 1.623 0 2.938-.314 2.938-.718l.229-3.835v-.016zm.615-7.046c-.769.046-1.153.903-1.539 1.805-.143.33-.63 1.737-.948 1.563-.318-.173.413-1.329.619-2.017-.237.174-1.105.849-1.329.215-.358.314-1.129.48-1.042-.329-.191.345-.621.823-1.139.614-.673-.255.395-2.411.66-2.307.266.121-.053.6-.136.794-.186.419-.398.958-.255 1.063.24.194.904-.703.919-.719.124-.165.479-1.229.763-1.107.285.134-.711 1.541-.34 1.826.076.06.383-.03.569-.239.12-.12.078-.42.479-1.378.404-.959.764-2.156 1.039-2.066s.049.703-.051.943c-.464 1.078-1.268 2.844-.89 2.71.374-.135.569-.135.943-.569.374-.434.345-1.152.599-1.137.24.014.21.254.15.418.24-.27 1.152-.868 1.363-.284.254.688-1.304 1.692-.914 1.632.375-.045.988-.434 1.258-.793l.719-6.5s-.734.6-5.361.6-5.284-.584-5.284-.584l.613 5.93c.33-.928 1.108-2.814 2.322-2.74.554.03 1.303 1.109.658 1.139-.27.015-.3-.539-.614-.614-.239-.046-.554.135-.763.345-.404.404-1.304 2.006-1.184 2.801.15 1.018 1.407-.346 1.617-.75.149-.283.254-1.138.568-1.048.33.09-.029.974-.27 1.737-.27.869-.404 1.781-.732 1.676-.33-.104.209-1.227.178-1.422-.313.299-.883 1.02-1.631.659l.374 3.699s1.019.793 4.073.793 4.118-.793 4.118-.793l.479-4.283c-.389.39-1.617 1.063-1.692.3-.059-.614 1.333-1.498.974-1.514l.06-.069zM17.346.669l-2.659 2.8-.486 1.901c1.881.12 3.189.386 3.189.694 0 .419-2.414.757-5.391.757s-5.39-.343-5.39-.763c0-.419 2.414-.764 5.391-.764.423 0 .844 0 1.264.016l.561-2.276L16.65.039c.068-.09.28-.015.474.15.194.149.299.344.239.434v.03l-.017.016zm-3.834 5.795s-.523 0-.61-.08c-.022-.025-.036-.058-.036-.09 0-.058.039-.091.09-.11l.044.075c-.021.006-.029.015-.033.023 0 .041.314.069.555.066.239-.003.531-.023.533-.064 0-.012-.023-.023-.061-.033l.045-.072c.063.02.117.058.117.121 0 .11-.141.128-.23.141-.107.015-.412.023-.412.023h-.002z",
    travis: "M15.044 12.42l.015.01c.12 0 .225-.106.21-.226 0-.122-.1-.22-.22-.22h-.006c-.122-.002-.222.094-.226.215v.01c0 .12.106.224.226.21zM9.23 12.15h-.017c-.122 0-.22.102-.217.223v.007c.002.122.104.22.227.218h.003c.126-.002.227-.105.226-.23-.002-.123-.1-.22-.223-.22zM10.264 15.675l1.79.136 1.665-.352c.12-.024.24 0 .34.07l1.228.84 1.26.118c.135-.3.24-.63.314-.96h-.06l-3.42-.464c-.163-.02-.302-.13-.36-.285l-.614-1.77c-.075-.046-.465-.016-.645.074l-.63 1.71c-.043.147-.165.258-.315.286l-3.345.78-.06.015c.12.406.285.796.48 1.186l1.02-.285-.033-.038 1.054-.944c.09-.083.21-.124.33-.113z M16.893 17.37l-.078.034-1.73-.17c-.07-.016-.138-.04-.202-.075l-1.155-.796-1.53.315c-.045 0-.075.013-.12 0l-1.665-.137-.99.886c-.046.042-.103.073-.165.09l-1.785.51c-.074.014-.15.014-.225 0l1.05 1.184 3.495-.495.3-.616c.06-.113.163-.2.285-.24.123-.032.254-.01.36.06l1.32.886 2.94-.675.63-1.005-.526.21c-.075.014-.135.03-.21.03zM12.418 19.348l.002.012c-.067.13-.192.22-.336.24l-1.12.158c.353.105.72.16 1.102.16.507-.002 1.01-.104 1.477-.3l-.945-.63-.18.36zM6.103 11.783h.002l.42 2.44.93.704 2.915-.675.585-1.647c.032-.083.088-.156.16-.21.05-.034.503-.35 1.065-.35.66 0 .948.426.98.477l.587 1.676 2.98.408.925-.64.615-2.136c-3.974-.9-8.19-.914-12.164-.047zm3 1.84l.002-.01h-.27c-.424 0-.698-.018-.94.11.01-.017.117-.25.496-.347-.05-.13-.074-.267-.074-.404-.026-.686.4-1.25.837-1.256.438 0 .742.555.75 1.245.006.692-.36.647-.8.662zm5.99-2.09v.017c.44-.015.84.525.892 1.216.02.145 0 .292-.05.428.403-.047.5.23.5.244-.294-.15-.618.03-1.204.047-.442.015-.806.015-.833-.676-.025-.69.26-1.26.696-1.276z M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.098 10.38c-.06.57-.195 1.064-.42 1.454-.104.18-.3.255-.494.21l-.045-.015h-.017l-.045-.016-.645 2.294c-.03.107-.094.2-.18.27l-.466.33v.135c-.06.39-.15.78-.255 1.155l.886-.33c.18-.075.374-.015.51.135.122.147.134.357.03.52l-1.41 2.278c-.06.1-.157.17-.27.2l-1.74.404c-.99.875-2.205 1.4-3.48 1.4L12 20.746h-.01c-.988 0-1.903-.31-2.698-.82l-1.245.174h-.06c-.127 0-.247-.045-.337-.15l-2.52-2.82c-.137-.155-.15-.384-.03-.554.125-.165.346-.228.54-.15l1.11.466c-.237-.51-.407-1.065-.507-1.605-.005-.05-.005-.1 0-.15l-.51-.39c-.096-.06-.156-.165-.17-.285l-.43-2.535-.34.09c-.04.015-.074.015-.12.015-.155-.003-.297-.09-.374-.225-.226-.39-.37-.87-.42-1.455-.062-.615-.022-1.125.128-1.5.038-.117.126-.21.24-.255.387-.165.78-.3 1.182-.435.585-2.775 3.343-4.847 6.553-4.847s5.97 2.07 6.555 4.86c.39.135.78.27 1.17.435.118.044.212.137.255.256.15.388.195.898.135 1.513z M18.163 9.092l.075-.074h-.014c-.098 0-.192-.03-.27-.086-1.165-.362-2.36-.615-3.57-.755-.232-.014-.408-.213-.395-.444 0-.012 0-.024.003-.036.013-.102.06-.188.126-.257-.053.02-.11.034-.17.034h-.824v.675c.21.044.36.224.36.434l-.033-.025v1.106c0 .244-.21.444-.45.444H11.19c-.24 0-.44-.21-.44-.45V8.55c0-.214.15-.39.35-.435v-.66h-.824c-.243-.003-.437-.203-.434-.446V5.545c0-.245.21-.443.45-.443h3.658c.245 0 .444.21.444.45v1.47c0 .125-.05.236-.128.317.066-.026.14-.042.223-.033 1.05.135 2.083.33 3.09.615-.707-2.13-2.957-3.66-5.55-3.66-2.597 0-4.847 1.53-5.55 3.675.913-.255 1.86-.435 2.803-.57.255-.03.465.15.495.39.03.24-.15.465-.39.495-1.14.15-2.25.404-3.33.734-.044.03-.097.046-.15.045-.375.12-.735.256-1.11.406-.045.21-.06.51-.015.945.03.316.09.57.18.81 4.624-1.154 9.46-1.154 14.085 0 .075-.224.136-.494.165-.794.03-.375.03-.69-.03-.93-.337-.13-.677-.256-1.02-.374z M14.12 7.44c.056-.024.105-.058.146-.1-.057.022-.105.056-.146.1zM10.725 6.567h.15c.007-.238.203-.428.44-.427h.235c.246 0 .446.2.446.444V8.55c0 .213-.15.39-.36.435v.23h.93v-.23c-.208-.042-.356-.224-.355-.435V6.585c0-.246.21-.446.45-.446h.24c.24 0 .437.19.45.427h.134v-.58h-2.76v.58z",
    jest: "",
    mongo: "M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z",
    nodejs: "M11.435.153l-9.37 5.43c-.35.203-.564.578-.563.983V17.43c0 .404.215.78.564.982l9.37 5.435c.35.203.78.203 1.13 0l9.366-5.433c.35-.205.564-.578.565-.982V6.566c0-.404-.216-.78-.566-.984L12.567.152c-.35-.203-.782-.203-1.13 0",
    webpack: "M21.0157 18.1202L12.351 23v-3.8007l5.3986-2.9567 3.266 1.8776zm.5927-.5344V7.3805l-3.1708 1.822v6.5593l3.1708 1.824zm-18.6827.5344L11.5904 23v-3.8007l-5.3986-2.9567-3.266 1.8776zm-.5927-.5344V7.3805l3.1707 1.822v6.5593l-3.1707 1.824zm.371-10.8656l8.8864-5.0056v3.6748L5.8974 8.507l-.0434.0248-3.15-1.8116zm18.5335 0L12.351 1.7146v3.6748l5.693 3.1177.0434.0248 3.15-1.8116zm-9.647 11.6146l-5.3262-2.9155V9.642l5.326 3.062v5.6308zm.7605 0l5.326-2.9155V9.642l-5.326 3.062v5.6308zM6.625 8.9734l5.3467-2.928 5.3468 2.928-5.3468 3.0744L6.625 8.9734z"
}

type Props = {
    d: string,
    height?: number,
    iconType: string
}

class Icon extends React.Component<Props> {
    static defaultProps = {
        height: 24,
        iconClass: '',
        iconType: ''
    }

    render() {
        const {d, maxWidth, minWidth, height, iconType} = this.props

        return (
            <svg className={`icon ${iconType}`}
                viewBox="0 0 24 24"
                style={{ maxWidth: maxWidth, minWidth: minWidth, height: height}}>
                <path d={d}/>
            </svg>
        )
    }
}

export {
    Icon,
    ICONS
}
