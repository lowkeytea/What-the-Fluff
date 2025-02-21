# Logically Tea

A mobile news application that allows you to interact with news content offline or engage in unique conversations with finely-tuned characters—all powered by a local Large Language Model (LLM).

**Copyright © [2025] [Lowkey Tea LLC]. All rights reserved.**

[![iOS](https://img.shields.io/badge/iOS-Available%20Soon-blue)](https://example.com/appstorelink)  [![Android](https://img.shields.io/badge/Android-In%20Development-orange)](https://example.com/playstorelink)

**(Replace the example.com links above with actual app store/play store links when available.)**

## Overview

Logically Tea leverages the power of local LLMs to provide interactive and engaging news experiences, even without an internet connection. Converse with unique characters, explore different perspectives, and dive deeper into the news that matters to you.

## Features

*   **Offline News Access:** Read and interact with news content downloaded directly to your device.
*   **Unique Character Conversations:** Engage in dynamic conversations with AI-powered characters, each with their own distinct personalities and perspectives.
*   **Local LLM Processing:** All processing happens on-device, ensuring privacy and responsiveness.
*   **Retrieval Augmented Generation (RAG):** A custom RAG system, using Universal Sentence Encoder and ObjectBox, enhances conversations with relevant information.
*   **Long-Term Memory:** Conversations are stored on-device and used to inform future interactions, creating a more personalized experience.

## Technologies Used

*   [Llama.cpp](https://github.com/ggerganov/llama.cpp): For local LLM inference.
*   [Llama 3.2 1B](https://huggingface.co/meta-llama/Llama-3.1-3B-Instruct) / [Llama 3.2 3B](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct): The base LLMs used. (Note: These models are licensed by Meta and used under their respective licenses.)
*   LoRA (Low-Rank Adaptation): For fine-tuning character personalities.
*   Universal Sentence Encoder: For semantic search in the RAG system.
*   [ObjectBox](https://objectbox.io/): As a Vector Database.
*   [Unsloth](https://github.com/unslothai/unsloth): For LoRA fine-tuning.
*   Native code (iOS/Android specific)

## Character Copyrights

*   Captain Annarky: Copyright © [2025] [Lowkey Tea]. All rights reserved.
*   M1lkt3a: Copyright © [2025] [Lowkey Tea]. All rights reserved.

## Character Details

*   **Captain Annarky & M1lkt3a:** These characters are fine-tuned using LoRA models and custom datasets, enabling dynamic and engaging conversations.
*   **The Creator & Monster Invasion:** These character types use a dynamic prompt system, allowing for greater variation and flexibility in their responses.
*   **Generically You:** A simple summarizer and general-purpose AI character.

## Model Training and Data

The datasets for the LoRA models were generated using a swarm of smaller and larger local LLMs, including dynamic system prompts, scene-creation LLMs, and a dynamic conversation partner LLM.  This distilled output was used to fine-tune the smaller models for optimal performance on edge devices.

Trained models are available on my [Hugging Face repository](https://huggingface.co/spybyscript) in GGUF format. They are compatible with applications like [LM Studio](https://lmstudio.ai/).

## Developer's Note

As primarily an Android developer, launching this app on iOS has been a rewarding challenge. For beginner developers, I recommend exploring [Google's AI Studio](https://aistudio.google.com/) as a valuable and free resource for learning and debugging AI-related projects.

## Special Thanks

*   My daughter, for providing the original name, character sketches, and personality concepts.
*   My wife, for her incredible patience during the development process.
*   Vedal (of [Vedal & Neuro-sama](https://www.twitch.tv/vedal987)), for the inspiration to explore AI and create this app.
