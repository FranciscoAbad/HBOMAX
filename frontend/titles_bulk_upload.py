import requests
import csv
import json

url = "http://localhost:8888/title/create"

csv_file_path = "movies_action_corrected.csv"

with open(csv_file_path, "r") as csvfile:
    reader = csv.DictReader(csvfile)
    
    for row in reader:
        movie_data = {
            "titleName": row["titleName"],
            "titleType": row["titleType"],
            "season": row["season"],
            "episode": row["episode"],
            "runTime": row["runtime"],
            "rating": row["episode"],
            "overview": row["overview"],
            "episodeName": row["episodeName"],
            "quality": row["quality"],
            "releaseDate": row["releaseDate"],
            "addedDate": row["addedDate"],
            "producer": row["producer"],
            "distributor": row["distributor"],
            "brand": row["brand"],
            "lenguage": row["lenguage"],
            "country": row["country"],
            "genre": row["genre"]
        }
        
        
        files = {
            "json": (None, json.dumps(movie_data), "application/json"),
            "posterPicture": open(row["posterPath"], "rb"),
            "bannerPicture": open(row["bannerPath"], "rb"),
            "namePicture": open(row["namePath"], "rb")
        }
        
        response = requests.post(url, files=files)
        
        if response.status_code == 200:
            print(f"Uploaded: {row['titleName']}")
        else:
            print(f"Failed to upload {row['titleName']}: {response.text}")
