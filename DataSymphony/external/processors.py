import cv2 as cv
import numpy as np



class videoProcessor:
    def __init__(self,pathToVideo):
        FINAL_SIZE = (224,224)
        FINAL_FPS = 15

        self.pathToOutputVideo = f"{pathToVideo.split('.mp4')[0]}_output.mp4"
        cap = cv.VideoCapture(pathToVideo)
        fourcc = cv.VideoWriter_fourcc(*'mp4v')
        out = cv.VideoWriter(self.pathToOutputVideo,fourcc, FINAL_FPS, FINAL_SIZE)
   
        alt = 1
        while True:
            ret, frame = cap.read()
            if ret == True:
                if alt:
                    b = cv.resize(frame,FINAL_SIZE,fx=0,fy=0, interpolation = cv.INTER_CUBIC)
                    out.write(b)
                    alt = 0
                else:
                    alt = 1         
            else:
                break
            
        cap.release()
        out.release()
        cv.destroyAllWindows()



    def generateReport(self):

        pass


vp = videoProcessor("../videos_uploaded/long_untrimmed_video.mp4")
