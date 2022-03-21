import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

df = pd.read_csv('get-recipes.csv')

df.groupby(['success']).count().plot(
    kind='pie', y='timeStamp', autopct='%1.1f%%', startangle=90)
plt.ylabel('Success')
plt.title('5000 requests made to /recipe to fetch all recipes (4 servers)')
plt.show()
