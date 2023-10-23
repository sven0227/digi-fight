import twitterSrc from './twitter.svg'
import discordSrc from './discord.svg'
import bananaSrc from './banana.svg'
import cocoSrc from './coco.svg'
import paperSrc from './paper.svg'

type IconVariant = 'twitter' | 'discord' | 'banana' | 'coco' | 'paper'

export function SocialIcon({ variant }: { variant: IconVariant }) {
  if (variant === 'twitter') return <img src={twitterSrc} alt='twitter' />
  if (variant === 'discord') return <img src={discordSrc} alt='twitter' />
  if (variant === 'banana') return <img src={bananaSrc} alt='twitter' />
  if (variant === 'coco') return <img src={cocoSrc} alt='twitter' />
  if (variant === 'paper') return <img src={paperSrc} alt='twitter' />
}

export function ActivePlayersIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M10 10.02a.293.293 0 0 0 .293-.292V6.859c0-.312.253-.565.565-.565h2.974a1.568 1.568 0 0 0 0-3.135h-2.974a.565.565 0 0 1-.565-.565V1.316a.293.293 0 0 0-.586 0v1.278c0 .635.515 1.15 1.15 1.15h2.975a.982.982 0 0 1 0 1.964h-2.974A1.15 1.15 0 0 0 9.707 6.86v2.869c0 .161.131.293.293.293Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#8C818F'
        d='M18.348 18.684H1.652a1.36 1.36 0 0 1-1.359-1.36V9.258c0-.75.609-1.36 1.36-1.36h16.695c.75 0 1.359.61 1.359 1.36v8.066c0 .751-.609 1.36-1.36 1.36Z'
      ></path>
      <path
        fill='#766D78'
        d='M18.348 17.53H1.652a1.36 1.36 0 0 1-1.359-1.359v1.153c0 .75.609 1.36 1.36 1.36h16.695c.75 0 1.359-.61 1.359-1.36v-1.153c0 .75-.609 1.36-1.36 1.36Z'
      ></path>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M0 17.324c0 .913.74 1.653 1.652 1.653h2.483a.293.293 0 0 0 0-.586H1.652a1.066 1.066 0 0 1-1.066-1.067V9.258c0-.589.477-1.066 1.066-1.066h14.21a.293.293 0 1 0 0-.586H1.653C.74 7.606 0 8.346 0 9.258v8.066ZM5.209 18.684c0 .161.131.293.293.293h12.846c.912 0 1.652-.74 1.652-1.653V9.258c0-.912-.74-1.652-1.652-1.652H17.23a.293.293 0 1 0 0 .586h1.118c.589 0 1.066.477 1.066 1.066v8.066c0 .59-.477 1.067-1.066 1.067H5.502a.293.293 0 0 0-.293.293Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#77D1B3'
        d='M4.818 15.614a2.325 2.325 0 0 1-2.323-2.323 2.325 2.325 0 0 1 2.323-2.322A2.325 2.325 0 0 1 7.14 13.29a2.325 2.325 0 0 1-2.323 2.323Z'
      ></path>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M2.202 13.291a2.618 2.618 0 0 0 2.616 2.616 2.618 2.618 0 0 0 2.616-2.616 2.618 2.618 0 0 0-2.616-2.615 2.618 2.618 0 0 0-2.616 2.615Zm2.616 2.03c-1.12 0-2.03-.91-2.03-2.03 0-1.119.91-2.03 2.03-2.03 1.119 0 2.03.912 2.03 2.03 0 1.12-.911 2.03-2.03 2.03Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#DDEBFD'
        d='M4.819 6.263A.818.818 0 0 0 4 7.081v6.21a.818.818 0 0 0 1.635 0v-6.21a.818.818 0 0 0-.817-.818Z'
      ></path>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M4.819 13.816a.525.525 0 0 1-.525-.525v-6.21a.525.525 0 1 1 1.05 0v6.21c0 .29-.235.525-.525.525Zm-1.111-.525a1.11 1.11 0 0 0 2.221 0v-6.21a1.11 1.11 0 1 0-2.221 0v6.21Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#DF646E'
        d='M4.819 3.646a2.733 2.733 0 1 0 0 5.465 2.733 2.733 0 0 0 0-5.465Z'
      ></path>
      <path
        fill='#DC4955'
        d='M6.34 4.109a2.733 2.733 0 0 1-3.861 3.683A2.733 2.733 0 1 0 6.34 4.109Z'
      ></path>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M4.819 8.818a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88Zm-3.026-2.44a3.026 3.026 0 1 0 6.051 0 3.026 3.026 0 0 0-6.051 0Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#EEC06B'
        d='M14.012 14.023a1.516 1.516 0 1 0-2.143 2.143 1.516 1.516 0 0 0 2.143-2.143Z'
      ></path>
      <path
        fill='#DF646E'
        d='M17.619 10.417a1.516 1.516 0 1 0-2.144 2.143 1.516 1.516 0 0 0 2.144-2.143Z'
      ></path>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M13.805 15.959a1.223 1.223 0 0 1-1.73 0m0 0a1.223 1.223 0 1 1 1.73 0m-2.143.414a1.809 1.809 0 1 0 2.557-2.558 1.809 1.809 0 0 0-2.557 2.558ZM17.411 12.353a1.223 1.223 0 1 1-1.729-1.73 1.223 1.223 0 0 1 1.73 1.73Zm-2.143.414a1.809 1.809 0 0 0 2.558-2.557 1.809 1.809 0 0 0-2.558 2.557Z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export function TotalEmitted() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <path
        fill='#8B8089'
        d='M16.696 2.766H3.316a.738.738 0 0 0-.738.738v3.269h14.856V3.504a.738.738 0 0 0-.738-.738Z'
      ></path>
      <path
        fill='#EFEDEF'
        d='M15.183 1.293H4.823a.738.738 0 0 0-.737.738v6.035H15.92V2.03a.738.738 0 0 0-.738-.738Z'
      ></path>
      <path
        fill='#E5E1E5'
        d='M5.879 1.293H4.824a.738.738 0 0 0-.738.738v6.035H5.14V2.03c0-.408.33-.738.738-.738Z'
      ></path>
      <path
        fill='#9E9797'
        d='M18.375 16.215H1.633a1.336 1.336 0 0 1-1.336-1.336V8.11c0-.738.598-1.336 1.336-1.336h16.742c.738 0 1.336.598 1.336 1.336v6.77c0 .738-.598 1.336-1.336 1.336Z'
      ></path>
      <path
        fill='#8B8089'
        d='M3.32 16.21H1.633a1.335 1.335 0 0 1-1.336-1.335v-6.77c0-.738.598-1.335 1.336-1.335H3.32c-.738 0-1.336.597-1.336 1.335v6.77c0 .738.598 1.336 1.336 1.336Z'
      ></path>
      <path
        fill='#5B5555'
        d='M15.922 12.094H4.087a1.259 1.259 0 1 0 0 2.517h11.835a1.259 1.259 0 1 0 0-2.517Z'
      ></path>
      <path
        fill='#EFEDEF'
        d='M15.921 12.094v5.08c0 .408-.33.738-.738.738H4.823a.738.738 0 0 1-.737-.738v-5.08H15.92Z'
      ></path>
      <path fill='#E5E1E5' d='M4.086 12.094H15.92v1.259H4.086v-1.26Z'></path>
      <path
        fill='#E5E1E5'
        d='M5.879 17.912H4.824a.738.738 0 0 1-.738-.738v-5.08H5.14v5.08c0 .408.33.738.738.738Z'
      ></path>
      <path
        fill='#DFF6FD'
        d='M17.725 10.613H13.32a.866.866 0 0 1-.866-.866v-1.08c0-.479.388-.866.866-.866h4.406c.478 0 .866.387.866.865v1.081a.866.866 0 0 1-.866.866Z'
      ></path>
      <path
        fill='#C8EFFE'
        d='M14.465 10.613H13.32a.865.865 0 0 1-.866-.866v-1.08c0-.479.388-.866.866-.866h1.146a.866.866 0 0 0-.865.865v1.081c0 .479.387.866.865.866Z'
      ></path>
      <path fill='#86E8D0' d='M3.505 10.13a.926.926 0 1 0 0-1.853.926.926 0 0 0 0 1.853Z'></path>
      <path fill='#FE7C66' d='M6.395 10.13a.926.926 0 1 0 0-1.853.926.926 0 0 0 0 1.853Z'></path>
      <path
        fill='#000'
        d='M18.372 6.479h-.651V3.503c0-.569-.463-1.031-1.031-1.031h-.48V2.03c0-.569-.462-1.031-1.03-1.031H4.82c-.568 0-1.03.462-1.03 1.03v.442h-.48c-.568 0-1.03.462-1.03 1.03v2.976h-.651A1.63 1.63 0 0 0 0 8.107v.919a.293.293 0 0 0 .586 0v-.919c0-.575.468-1.043 1.043-1.043h16.743c.574 0 1.042.468 1.042 1.043v6.77c0 .575-.468 1.043-1.043 1.043h-2.16v-1.043a1.554 1.554 0 0 0 .804-2.622 1.543 1.543 0 0 0-1.097-.454H4.082a1.553 1.553 0 0 0-1.097 2.65c.223.222.502.368.804.426v1.043H1.63a1.044 1.044 0 0 1-1.043-1.043v-4.484a.293.293 0 0 0-.586 0v4.484c0 .898.73 1.629 1.629 1.629h2.16v.669c0 .568.463 1.03 1.031 1.03h8.235a.293.293 0 0 0 0-.585H4.82a.445.445 0 0 1-.445-.445v-4.788h11.25v4.788c0 .245-.2.444-.445.444h-.758a.293.293 0 0 0 0 .587h.758c.568 0 1.03-.463 1.03-1.031v-.67h2.162A1.63 1.63 0 0 0 20 14.878v-6.77a1.63 1.63 0 0 0-1.628-1.628ZM4.375 2.03c0-.245.2-.445.445-.445h10.36c.245 0 .445.2.445.445v2.053a.293.293 0 0 0 .585 0V3.058h.48c.245 0 .445.2.445.445v2.975h-.925V5.452a.293.293 0 1 0-.585 0v1.026H4.375V2.031Zm-1.51 1.472c0-.246.2-.445.445-.445h.48v3.42h-.925V3.504ZM3.4 14.036a.967.967 0 0 1 .39-1.603v1.84a.962.962 0 0 1-.39-.237Zm13.483-.683c0 .43-.283.796-.672.92v-1.84a.964.964 0 0 1 .672.92Z'
      ></path>
      <path
        fill='#000'
        d='M5.438 15.926c0 .162.13.293.292.293h8.538a.293.293 0 0 0 0-.586H5.73a.293.293 0 0 0-.293.293ZM14.272 14.7a.293.293 0 0 0 0-.587H9.918a.293.293 0 0 0 0 .586h4.354ZM17.721 10.906a1.16 1.16 0 0 0 1.159-1.159v-1.08a1.16 1.16 0 0 0-1.159-1.16h-4.406a1.16 1.16 0 0 0-1.159 1.16v1.08c0 .639.52 1.159 1.159 1.159h4.406Zm-4.979-1.159v-1.08c0-.316.257-.573.573-.573h4.406c.316 0 .573.257.573.572v1.081a.573.573 0 0 1-.573.573h-4.406a.573.573 0 0 1-.573-.573ZM3.5 10.423a1.22 1.22 0 0 0 1.22-1.22A1.22 1.22 0 0 0 3.5 7.985a1.22 1.22 0 0 0-1.219 1.22c0 .672.547 1.22 1.22 1.22Zm0-1.853a.634.634 0 1 1 0 1.269.634.634 0 0 1 0-1.269ZM7.61 9.204a1.22 1.22 0 0 0-1.219-1.22 1.22 1.22 0 0 0-1.22 1.22 1.22 1.22 0 0 0 2.439 0Zm-1.852 0a.634.634 0 1 1 1.268.001.634.634 0 0 1-1.268-.001Z'
      ></path>
    </svg>
  )
}

export function TotalBurned() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='21' fill='none' viewBox='0 0 21 21'>
      <g clipPath='url(#a)'>
        <path
          fill='#FD4848'
          fillRule='evenodd'
          d='M8.463 7.986s3.985 1.524 3.204 5.079c0 0 1.24-.391 1.894-1.524 1.526 2.333 2.206 6.959-2.464 8.774a3.852 3.852 0 0 1-.372.164c4.193-.14 8.38-3.028 8.182-8.166-.511.9-2.84.885-2.84.885 2.098-4.599-.972-6.849-.972-6.849.33 2.906-6.943 3.328-3.35-5.083-7.727 1.45-6.55 11.397-6.55 11.397-.87-.15-2.558-1.95-2.558-1.95-.949 6.813 3.492 9.865 7.973 9.77l-.01-.001c-3.512-.02-6.087-3.686-4.272-7.09.826-1.548 2.548-3.866 2.135-5.406Z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#FF8244'
          fillRule='evenodd'
          d='M11.67 13.066c.782-3.554-3.203-5.078-3.203-5.078.413 1.54-1.31 3.858-2.135 5.406-1.815 3.403.76 7.07 4.271 7.09-2.797-.133-5.449-5.2-.796-7.825-1.186 2.809 1.413 4.319 2.923 2.528 1.724 1.74.192 4.212-1.63 5.13 4.67-1.815 3.99-6.44 2.465-8.774-.654 1.133-1.895 1.524-1.895 1.524Z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#FFBA4A'
          fillRule='evenodd'
          d='M12.724 15.184c-1.51 1.791-4.109.281-2.923-2.528-4.653 2.625-2 7.693.796 7.825h.03a8.69 8.69 0 0 0 .468-.167c1.821-.918 3.354-3.39 1.63-5.13Z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#000'
          d='M19.296 12.298a.391.391 0 0 0-.73-.178c-.217.381-1.108.592-1.902.662.846-2.216.514-3.868.06-4.892-.542-1.218-1.365-1.83-1.4-1.856a.39.39 0 0 0-.619.36c.086.754-.49 1.13-.743 1.255-.567.285-1.469.317-2.107-.285-1.04-.977-.95-3.144.247-5.945a.39.39 0 0 0-.432-.537c-.936.175-1.939.534-2.553.914a.39.39 0 0 0 .41.664c.382-.235.964-.47 1.572-.641-1.427 3.77-.496 5.44.22 6.114.917.863 2.164.83 2.993.415.53-.266.9-.673 1.073-1.158.204.25.433.588.624 1.018.623 1.402.523 3.027-.299 4.828a.391.391 0 0 0 .353.553c.025 0 .624.002 1.296-.11.46-.078.844-.191 1.15-.34-.187 3.38-2.387 5.106-3.75 5.856a8.682 8.682 0 0 1-1.794.736c.14-.106.273-.216.4-.331a5.15 5.15 0 0 0 1.377-2.027.39.39 0 1 0-.733-.272 4.422 4.422 0 0 1-.211.479c.215-1.004-.06-1.927-.796-2.67a.39.39 0 0 0-.576.023c-.538.639-1.268.817-1.859.454-.547-.335-.982-1.212-.406-2.578a.39.39 0 0 0-.551-.492c-1.16.654-1.965 1.49-2.395 2.487a4.24 4.24 0 0 0-.192 2.78c.129.49.338.96.613 1.387a4.47 4.47 0 0 1-.903-1.074c-.796-1.327-.819-2.902-.062-4.321.168-.315.376-.667.597-1.039.75-1.266 1.583-2.672 1.644-3.898.341.189.783.473 1.196.856 1.07.991 1.466 2.164 1.175 3.486a.39.39 0 0 0 .5.456 4.196 4.196 0 0 0 1.744-1.18 6.97 6.97 0 0 1 .72 2.226.39.39 0 0 0 .773-.11 7.656 7.656 0 0 0-1.134-3.046.39.39 0 0 0-.665.019c-.29.502-.72.842-1.071 1.055.072-1.307-.449-2.504-1.53-3.496A7.02 7.02 0 0 0 8.601 7.62a.39.39 0 0 0-.517.466c.284 1.06-.698 2.72-1.488 4.052-.225.38-.438.739-.614 1.069-.89 1.667-.86 3.523.081 5.09.23.385.508.734.823 1.042a6.93 6.93 0 0 1-1.02-.58c-2.151-1.48-3.177-4.015-2.931-7.192.612.583 1.539 1.367 2.192 1.48a.391.391 0 0 0 .454-.43c-.006-.052-.577-5.162 1.946-8.425a.39.39 0 1 0-.618-.478C5.484 5.56 4.99 7.908 4.823 9.555a17.205 17.205 0 0 0-.067 2.492c-.59-.374-1.371-1.106-1.836-1.6a.39.39 0 0 0-.672.213c-.537 3.859.59 6.965 3.175 8.744 1.344.926 3 1.434 4.786 1.469a9.42 9.42 0 0 0 .404 0l.096.002a.399.399 0 0 0 .077-.008c1.528-.06 3.053-.474 4.35-1.188 1.29-.71 2.349-1.71 3.061-2.89.793-1.316 1.163-2.826 1.1-4.49ZM9.141 13.571a2.98 2.98 0 0 0 .042 1.087c.141.6.488 1.096.976 1.396.431.264.945.356 1.448.258a2.353 2.353 0 0 0 1.097-.55c.353.49.463 1.049.328 1.666-.216.985-1.085 2.014-2.096 2.53a8.26 8.26 0 0 1-.358.129h-.028c-1.193-.095-2.39-1.247-2.771-2.7-.19-.722-.38-2.405 1.362-3.816Z'
        ></path>
        <path
          fill='#000'
          d='M14.305 15.543v.008a.39.39 0 0 0 .377.404h.014a.39.39 0 0 0 .39-.377v-.012a.39.39 0 1 0-.78-.023ZM8.406 3.102a.39.39 0 1 1-.78 0 .39.39 0 0 1 .78 0Z'
        ></path>
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M.672.875h20v20h-20z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export function RemainingIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <g clipPath='url(#a)'>
        <path fill='#E1E3E9' d='M.39.39h19.22v17.421H.39V.391Z'></path>
        <path
          fill='#98A1B3'
          d='M2.352 4.895h1.96v2.94h-1.96v-2.94ZM2.352 10.367h1.96v2.94h-1.96v-2.94ZM7.484 17.813v1.798H3.335v-1.799h4.15ZM17.016 17.813v1.798h-4.15v-1.799h4.15ZM10.662 13.116a4.013 4.013 0 1 0 0-8.026 4.013 4.013 0 0 0 0 8.026Z'
        ></path>
        <path
          fill='#E1E3E9'
          d='M10.661 10.725a1.622 1.622 0 1 0 0-3.244 1.622 1.622 0 0 0 0 3.244Z'
        ></path>
        <path
          fill='#000'
          d='M19.61 0h-7.852a.39.39 0 0 0 0 .781h7.46v16.64H.782V.78h7.461a.39.39 0 1 0 0-.781H.391A.39.39 0 0 0 0 .39v17.421c0 .216.175.39.39.39h2.55v1.408c0 .216.175.391.39.391h4.15a.39.39 0 0 0 .39-.39v-1.408h4.609v1.407c0 .216.174.391.39.391h4.15a.39.39 0 0 0 .39-.39v-1.408h2.2a.39.39 0 0 0 .391-.39V.39A.39.39 0 0 0 19.61 0ZM7.088 19.219H3.721v-1.017h3.368v1.017Zm9.539 0H13.26v-1.017h3.368v1.017Z'
        ></path>
        <path
          fill='#000'
          d='M10 .781A.39.39 0 1 0 10 0a.39.39 0 0 0 0 .781ZM3.332 15.61H17.02a.39.39 0 0 0 .39-.39V2.98a.39.39 0 0 0-.39-.39H3.332a.39.39 0 0 0-.391.39v1.522h-.59a.39.39 0 0 0-.39.39v2.94c0 .216.175.391.39.391h.59v1.753h-.59a.39.39 0 0 0-.39.391v2.94c0 .215.175.39.39.39h.59v1.522c0 .216.175.39.39.39Zm-.59-10.327h1.179v2.159H2.742V5.283Zm.98 2.94h.59a.39.39 0 0 0 .39-.39v-2.94a.39.39 0 0 0-.39-.39h-.59V3.37H16.63v11.457H3.722v-1.13h.59a.39.39 0 0 0 .39-.391v-2.94a.39.39 0 0 0-.39-.39h-.59V8.222Zm-.98 2.535h1.179v2.158H2.742v-2.158Z'
        ></path>
        <path
          fill='#000'
          d='M10.662 13.503a4.409 4.409 0 0 0 4.403-4.404 4.409 4.409 0 0 0-4.403-4.404A4.409 4.409 0 0 0 6.258 9.1a4.409 4.409 0 0 0 4.404 4.404ZM7.477 8.708H7.06a3.606 3.606 0 0 1 .78-1.878l.294.293a.39.39 0 0 0 .552 0 .39.39 0 0 0 0-.552l-.293-.294a3.605 3.605 0 0 1 1.878-.78v.417a.39.39 0 1 0 .781 0v-.416a3.606 3.606 0 0 1 1.879.78l-.294.293a.39.39 0 1 0 .553.552l.293-.293c.424.526.704 1.172.78 1.879h-.417a.39.39 0 1 0 0 .78h.417a3.606 3.606 0 0 1-.78 1.88l-.293-.294a.39.39 0 0 0-.553.552l.294.294a3.605 3.605 0 0 1-1.879.78v-.417a.39.39 0 0 0-.781 0v.417a3.606 3.606 0 0 1-1.879-.78l.294-.294a.39.39 0 1 0-.553-.552l-.293.293a3.606 3.606 0 0 1-.78-1.878h.417a.39.39 0 0 0 0-.782Z'
        ></path>
        <path
          fill='#000'
          d='M10.661 11.115c1.11 0 2.013-.902 2.013-2.012 0-1.11-.903-2.013-2.013-2.013-1.11 0-2.013.903-2.013 2.013 0 1.11.903 2.012 2.013 2.012Zm0-3.244a1.233 1.233 0 0 1 0 2.463A1.233 1.233 0 0 1 9.43 9.103c0-.68.552-1.232 1.231-1.232Z'
        ></path>
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h20v20H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export function RektIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <g clipPath='url(#a)'>
        <path
          fill='#D9D9D9'
          fillRule='evenodd'
          d='M17.324 13.822a1.254 1.254 0 1 1 1.07 1.8 1.254 1.254 0 1 1-2.072-.304L10 11.083l-6.322 4.235a1.254 1.254 0 1 1-2.07.304 1.253 1.253 0 1 1 1.068-1.8L8.383 10 2.676 6.177a1.254 1.254 0 1 1-1.07-1.8 1.253 1.253 0 1 1 2.072.305L10 8.917l6.322-4.235a1.254 1.254 0 1 1 2.07-.304 1.253 1.253 0 1 1-1.068 1.8L11.617 10l5.707 3.822Z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#F7F7F7'
          d='M15.381 9.57a5.48 5.48 0 0 0-5.439-5.48c-3.03-.021-5.52 2.45-5.52 5.48a5.478 5.478 0 0 0 2.759 4.757v1.338c0 .474.384.859.859.859h3.723a.859.859 0 0 0 .86-.859v-1.338A5.478 5.478 0 0 0 15.38 9.57Z'
        ></path>
        <path
          fill='#E8E8E8'
          d='M9.943 4.09c-.21 0-.418.01-.623.032a5.48 5.48 0 0 1 2.132 10.205v1.338a.859.859 0 0 1-.86.859h1.172a.859.859 0 0 0 .86-.859v-1.338A5.48 5.48 0 0 0 9.944 4.09Z'
        ></path>
        <path
          fill='#C8C3CA'
          fillRule='evenodd'
          d='M7.64 12.089a1.456 1.456 0 1 0 0-2.911 1.456 1.456 0 0 0 0 2.91Zm4.484 0a1.456 1.456 0 1 0 0-2.911 1.456 1.456 0 0 0 0 2.91Z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#000'
          fillRule='evenodd'
          d='M4.662 7.155c.172-.37.382-.72.624-1.043L3.515 4.926a.293.293 0 0 1-.056-.439.961.961 0 0 0-.181-1.44.96.96 0 0 0-1.405 1.207.293.293 0 0 1-.28.417.96.96 0 0 0-.58 1.759.961.961 0 0 0 1.333-.264.975.975 0 0 0 .067-.117.293.293 0 0 1 .426-.115l1.823 1.22ZM5.664 5.66 4.09 4.606A1.547 1.547 0 1 0 1.22 4.12a1.547 1.547 0 1 0 1.543 2.47L4.438 7.71c-.2.584-.309 1.21-.309 1.86 0 .91.21 1.77.585 2.535l-1.95 1.307A1.547 1.547 0 0 0 .262 15.23H.26c.232.347.58.57.958.65a1.547 1.547 0 0 0 2.384 1.558v.001a1.547 1.547 0 0 0 .487-2.045l2.097-1.405c.22.185.454.354.7.505v1.171c0 .636.516 1.152 1.152 1.152h3.724c.636 0 1.152-.516 1.152-1.152v-1.171c.278-.17.541-.365.786-.579l2.207 1.479a1.547 1.547 0 1 0 2.871.487 1.545 1.545 0 0 0 1.12-2.06.293.293 0 1 0-.548.207.96.96 0 0 1-.945 1.301.293.293 0 0 0-.28.417.96.96 0 0 1-1.405 1.206.962.962 0 0 1-.181-1.44.293.293 0 0 0-.056-.438l-2.353-1.576c.276-.297.52-.623.73-.972l2.299 1.54a.292.292 0 0 0 .426-.115.962.962 0 0 1 1.09-.517.293.293 0 0 0 .136-.57 1.548 1.548 0 0 0-1.576.548l-2.1-1.407a5.75 5.75 0 0 0 .537-2.435c0-.611-.095-1.2-.27-1.754l1.833-1.228a1.547 1.547 0 0 0 2.501-1.818l-.243.163.243-.163a1.542 1.542 0 0 0-.958-.65 1.547 1.547 0 1 0-2.87.487l-1.69 1.131a5.758 5.758 0 0 0-6.703-1.422.293.293 0 1 0 .243.533 5.14 5.14 0 0 1 2.18-.465 5.187 5.187 0 0 1 2.537 9.689.293.293 0 0 0-.147.254v1.338a.566.566 0 0 1-.566.566h-.225v-.868a.293.293 0 0 0-.586 0v.868h-.758v-.868a.293.293 0 0 0-.586 0v.868H8.85v-.868a.293.293 0 1 0-.586 0v.868H8.04a.566.566 0 0 1-.566-.566v-1.338a.293.293 0 0 0-.147-.254A5.184 5.184 0 0 1 4.715 9.57c0-1.703.831-3.22 2.109-4.167a.293.293 0 1 0-.35-.471c-.292.217-.563.46-.81.728Zm8.923.537c.23.318.427.66.588 1.021l.918-2.03-.918 2.03.016.035 1.97-1.319a.293.293 0 0 1 .426.115.961.961 0 1 0 .82-1.379.293.293 0 0 1-.28-.416.96.96 0 0 0-1.405-1.206.961.961 0 0 0-.264 1.333l-.365.807-1.506 1.01Zm1.506-1.009.392-.262a.293.293 0 0 0 .056-.439.973.973 0 0 1-.082-.106l-.366.807Zm-10.345 8.39A5.799 5.799 0 0 1 5 12.62l-2.16 1.447a.293.293 0 0 1-.427-.116.961.961 0 1 0-.82 1.379.293.293 0 0 1 .28.417.96.96 0 0 0 .39 1.241.961.961 0 0 0 1.278-1.368.962.962 0 0 0-.082-.106.293.293 0 0 1 .056-.439l2.233-1.496Zm.142-2.945a1.748 1.748 0 1 0 3.497 0 1.748 1.748 0 0 0-3.497 0Zm1.749 1.163a1.163 1.163 0 1 1 0-2.325 1.163 1.163 0 0 1 0 2.325Zm4.485.586a1.748 1.748 0 1 1 0-3.497 1.748 1.748 0 0 1 0 3.497Zm-1.163-1.749a1.163 1.163 0 1 0 2.325 0 1.163 1.163 0 0 0-2.325 0Zm-.42 2.067a.293.293 0 0 1-.418.41l-.22-.223-.224.225a.293.293 0 0 1-.414-.414l.434-.434a.293.293 0 0 1 .416.002l.426.434Z'
          clipRule='evenodd'
        ></path>
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h20v20H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}
