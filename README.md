# 🏛️ Extended Reality Framework for Cultural Heritage Preservation

### 🌐 Overview
The **Extended Reality (XR) Framework for Cultural Heritage Preservation** is an open-source initiative that uses **Virtual Reality (VR)**, **Augmented Reality (AR)**, and **Artificial Intelligence (AI)** to digitally preserve and visualize cultural heritage sites in immersive 3D environments.

This project enables users, researchers, and historians to explore reconstructed monuments interactively, providing AI-driven guided tours, multilingual narration, and metadata storage — all while promoting sustainable digital conservation of cultural artifacts.

---

## 🚀 Features
- 🏗️ **3D Model Reconstruction** using photogrammetry or LiDAR scans  
- 🧭 **Immersive XR Environment** built in Unity 3D  
- 🗣️ **AI Narration & Guided Tours** using Google Cloud Text-to-Speech  
- 🌍 **Multilingual Support** for global accessibility  
- 💾 **Secure Cloud Storage** for digital assets and metadata  
- 🧠 **Modular Framework** — extendable for museums, archaeology, and education  

---

## 🏗️ System Architecture

+----------------+        +-------------------+        +----------------------+
|  Data Capture  | --->   |  3D Reconstruction | --->  |  XR Visualization   |
| (Drone/LiDAR)  |        | (Metashape/Blender)|       | (Unity / WebXR)     |
+----------------+        +-------------------+        +----------------------+
                                    |
                                    v
                        +------------------------+
                        | AI Narration & Metadata |
                        | (Python + Cloud APIs)  |
                        +------------------------+

---

## 🧰 Tech Stack

| Component | Technology |
|------------|-------------|
| XR Environment | Unity 3D, Blender |
| 3D Scanning | Agisoft Metashape, Meshroom |
| AI Narration | Python, Google Cloud Text-to-Speech |
| Backend | Firebase / Node.js |
| Frontend (optional web) | React + Three.js |
| Cloud | Google Cloud / AWS S3 |
| Version Control | Git + GitHub |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/xr-heritage-framework.git
cd xr-heritage-framework
```

### 2️⃣ Unity Setup
- Open the project in **Unity 2021.3 LTS** or later.  
- Import the required XR and AR Foundation packages from **Unity Package Manager**.  
- Configure your **XR Plugin Management** for your target platform (Oculus, Android, WebXR).

### 3️⃣ Python AI Narration (Optional)
```bash
cd ai_narration
pip install -r requirements.txt
python generate_voice.py
```

> Set your `GOOGLE_APPLICATION_CREDENTIALS` environment variable for Google Cloud TTS.

### 4️⃣ Run the Application
- Click **Play** in Unity Editor, or  
- Build for **Android / VR headset** via *File → Build Settings*.

---

## 📸 Sample Output

| Feature | Screenshot |
|----------|-------------|
| 3D Reconstructed Heritage Site | 🏛️ ** |
| VR Tour Interface | 🕶️ ** |
| AI Voice Narration | 🎧 ** |

---

## 🧠 Project Structure

```
xr-heritage-framework/
│
├── Assets/                # Unity assets, scenes, scripts
├── 3d_models/             # Reconstructed 3D assets (FBX, OBJ)
├── ai_narration/          # Python scripts for AI narration
│   ├── generate_voice.py
│   ├── requirements.txt
│
├── docs/                  # Documentation & architecture diagrams
├── README.md              # Project overview
└── LICENSE                # Open-source license
```

---

## 📜 Algorithm (Simplified)

1. Capture site images or 3D scans.  
2. Generate 3D mesh using photogrammetry (Agisoft/Blender).  
3. Import model into Unity for XR rendering.  
4. Integrate AI narration using Google Cloud TTS.  
5. Build XR experience for target device.

---

## 🧩 Future Enhancements
- Integration with **Blockchain** for authenticity verification  
- Real-time **multi-user VR collaboration**  
- AI-based **artifact damage prediction and restoration**  
- **Haptic feedback** support for tactile interaction  

---

## 🧑‍💻 Contributors
- **Prajapati Abhay** – Developer & Researcher
- **Adarsh Singh** – Designer
- **Shaiban Sufi** – Developer
- **Anuj Yadav** – Documentation & Researcher
- **Dr. Roopali Lolage** – Project Guide  

---

## 📄 License
This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

```
MIT License © 2025 Prajapati Abhay
```

---

## 🌟 Acknowledgements
- Unity Technologies for XR toolkit  
- Agisoft for photogrammetry tools  
- Google Cloud for Text-to-Speech API  
- Department of Information Technology, University of Mumbai  

---

## 💬 Feedback
If you find this project helpful or want to contribute:
- ⭐ Star the repository  
- 🐛 Submit issues or feature requests via GitHub Issues  
- 📬 Pull requests are welcome!

---

**Preserving the past — one digital frame at a time.**

