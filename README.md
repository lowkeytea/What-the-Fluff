** About **

**Captain Pickles & The News** is a mobile news application that allows you to interact with news content offline or engage in unique conversations with finely-tuned characters—all powered by a local Large Language Model (LLM).

Currently available soon on iOS (with an Android version in development), the app leverages [Llama.cpp](https://github.com/ggerganov/llama.cpp) directly. Depending on your device's capabilities, Captain Pickles uses one of the following models:

*   **[Gemma 2B](https://huggingface.co/google/gemma-2-2b-it)**
*   **[Llama 3.2 3B](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct)**

Initially, only one model is downloaded based on device capabilities, but you can later download alternatives.  Character personalities and capabilities are further enhanced using LoRA (Low-Rank Adaptation) models. Full-scale versions of these models, which offer increased creativity and power, are hosted on [Hugging Face](https://huggingface.co), but may exceed the capabilities of typical edge devices. To both create richer character experiences with LoRA adapters and minimize initial download size, Captain Pickles is limited to the models against which the LoRA adapters were fine-tuned.

All code within Captain Pickles & The News is native and utilizes a custom system for Retrieval Augmented Generation (RAG) incorporating Universal Sentence Encoder and [ObjectBox](https://objectbox.io/) for its Vector Database. Conversations are stored on device for as long as you want, and are also used as long-term memory.

The characters, such as Captain Pickles and M1lkt3a, were fine-tuned using [unsloth](https://github.com/unslothai/unsloth) using custom datasets created by a script system I created to create a wide variety of scenes, prompt changes, and customization to create more dynamic characters with small prompts.

The Creator and Monster Invasion do not use a LoRA like the previous characters, but instead a variation of the dynamic prompt system used to train the LoRA's themselves. This is primarily as these two character types are much more *dynamic* in variation ranging from different professions and, for the Monster Invasion, completely different creatures and scenarios. Both of them feature dynamically changing system prompts, hidden prompts, and more to help guide them along.  This works far better with the Llama model; Gemma "works" but is not awesome at being creative due to being a tiny model.

The Generically You character is simply a summarizer and your basic garden variety AI, if you're into those.

The datasets for the LoRA, featuring QA-style prompts and dynamic story content, were generated using a swarm of smaller and larger local LLMs. This included dynamic system prompts, scene-creation LLMs, and a dynamic conversation partner LLM. The distilled output was used to fine-tune the smaller models that now run on iPhone and other edge devices. The primary aim is to retain the unique personalities of these characters while generating interactive stories that can be further enhanced by RAG in future releases. There was a huge amount of trial and error creating the characters and learning what not to include as it turns out it is rediculously easy to "jailbreak" a smaller model with distilled content from a larger model and the use of key-phrases that you'd expect would be innocent but the data in LLMs are anything but that really.

Documentation regarding the creation of similar content will be released later. In the meantime, you can explore the trained models on my [Hugging Face repository](https://huggingface.co/spybyscript). The models are in GGUF format and compatible with applications such as [LM Studio](https://lmstudio.ai/). In LM Studio, with the full-sized models, you can customize prompts—for example, by setting the persona with prompts like "You are Captain Pickles," "You are M1lkt3a," or by suggesting traits like "you have a shark tail," "you have wolf ears," or "you are made of stardust." Captain Pickles utilizes a custom prompt system, so adjusting the system prompt is not currently available in the app.

As primarily an Android developer, deciding to launch my first app privately on the Apple App Store was quite an adventure! I'd gladly do it again, as I think I grew significantly as a developer by taking on a project for a platform I had only fleeting experience with. For beginning developers, I'd say that [Google's AI Studio](https://aistudio.google.com/) is the best resource out there. It's free, and with the right prompts, it can help debug issues and teach you the basics, especially if you approach it as a learning tool. Plus, it's incredibly fast and you can't beat the amount of tokens you can dump into it at one time.

**Special Thanks**

A heartfelt thank you to my daughter for providing the original name, character sketches, and personality concepts, and to my wife for her incredible patience while I developed this app while balancing a full-time job.

A thank you to Vedal (who probably doesn't know of the existence of this app!) as [Vedal & Neuro-sama](https://www.twitch.tv/vedal987) was an inspiration that pushed me to figure out how to do the AI thing myself, and to write this app.
