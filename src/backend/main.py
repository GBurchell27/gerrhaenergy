from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a router for solar requests
@app.post("/api/submit-solar-request")
async def submit_solar_request(request_data: dict):
    try:
        # Process the form data
        # Add your business logic here
        return {"status": "success", "message": "Solar request submitted successfully"}
    except Exception as e:
        return {"status": "error", "message": str(e)}