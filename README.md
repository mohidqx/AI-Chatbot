# Gemini Visionary Chat 🤖
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FF4980)]()


A chat application powered by Google's Gemini, built with React, TypeScript, and Vite.

This project provides a user interface for interacting with the Gemini AI model, allowing users to send messages and receive intelligent responses. The backend logic is handled by a Supabase function, ensuring secure and efficient communication with the AI gateway.



## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)



## Features ✨
- **AI-Powered Chat:** Interact with the Gemini AI model for intelligent conversations.
- **Real-time Streaming:**  Utilizes server-sent events for real-time message streaming from the AI gateway. 
- **Responsive UI:** Built with React and Tailwind CSS for a modern and responsive user interface. 
- **Supabase Integration:** Uses Supabase functions for backend logic and secure API key management.
- **Radix UI Components:** Leverages Radix UI for accessible and unstyled UI components.
- **Error Handling:** Implements robust error handling for API requests and provides informative error messages.
- **Rate Limiting:** Handles rate limit errors from the AI gateway and provides user-friendly messages.
- **Payment Required Handling:** Handles payment required errors from the AI gateway.



## Tech Stack 💻
- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Radix UI
  - react-router-dom
  - @tanstack/react-query
  - lucide-react
  - sonner
  - next-themes

- **Backend:**
  - Supabase Functions
  - Deno

- **Other:**
  - ESLint
  - Prettier
  - zod



## Installation 🛠️
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mohidqx/gemini-visionary-chat
   cd gemini-visionary-chat
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3.  Set up Supabase:
    - Create a new project on Supabase ([https://supabase.com/](https://supabase.com/)).
    - Obtain your Supabase URL and publishable key.
    - Set the `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` environment variables in your `.env` file.

4. Set up Lovable API key:
    - Obtain your Lovable API Key ([https://lovable.dev/](https://lovable.dev/)).
    - Set the `LOVABLE_API_KEY` environment variable in your Supabase project settings.

5.  Install Deno:
    - Follow the instructions on the official Deno website ([https://deno.land/](https://deno.land/)) to install Deno on your system.

6.  Deploy Supabase Function:
    - Navigate to the `supabase/functions/chat` directory.
    - Deploy the function using the Supabase CLI (`supabase functions deploy chat`).



## Usage 🚀
1.  Start the development server:
    ```sh
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:8080`.

3.  Start chatting with the AI assistant. Type your message in the input box and press Enter or click the send button.

4.  The assistant's response will be streamed to the chat interface in real-time.



### Use cases
This project can be used as a base for building:

*   A customer service chatbot
*   A personal AI assistant
*   An educational tool for interactive learning
*   An interface for exploring the capabilities of the Gemini AI model



## Project Structure 📁
```
├── .env
├── .eslint.config.js
├── components.json
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── bot-logo.png
│   ├── components
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessage.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── hooks
│   │   ├── useChat.ts
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── integrations
│   │   └── supabase
│   │       ├── client.ts
│   │       └── types.ts
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── vite-env.d.ts
├── supabase
│   ├── config.toml
│   └── functions
│   │   └── chat
│   │       └── index.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```



## API Reference ℹ️



### Supabase Function (`supabase/functions/chat/index.ts`)
-   **Endpoint:** `YOUR_SUPABASE_URL/functions/v1/chat`
-   **Method:** POST
-   **Headers:**
    -   `Content-Type`: `application/json`
    -   `Authorization`: `Bearer YOUR_SUPABASE_PUBLISHABLE_KEY`
-   **Body:**
    ```json
    {
      "messages": [  
        {
          "role": "user" | "assistant",
          "content": "string"
        }
      ]
    }
    ```
-   **Response:** (Streaming)
    -   `Content-Type`: `text/event-stream`



### Environment Variables (Required)
-   `VITE_SUPABASE_URL`: Your Supabase project URL.
-   `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable API key.
-   `LOVABLE_API_KEY`: API key for the AI gateway ([https://lovable.dev/](https://lovable.dev/)). This needs to be set as an environment variable in the Supabase project settings.



## Contributing 🙌
Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.



## License 📜
This project is open source. See the repository for license details.



## Important Links 🔗
- User's profiles links are not available.
- Live Demo: Not available



## Footer <footer>
- Repository: [gemini-visionary-chat](https://github.com/mohidqx/gemini-visionary-chat)
- Author: [mohidqx](https://github.com/mohidqx)

⭐️ Feel free to fork, like, and star the repository! If you encounter any issues, please open an issue.


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
