var tipuesearch = {"pages": [{'title': 'About', 'text': '原班級:四設三乙 \n 修課班級:四設一甲 \n 姓名:林晉廷 \n 學號:40832244 \n 網站倉儲: https://github.com/40832244-github/cp2021_hw \n 課程網站: https://40832244-github.github.io/cp2021_hw/ \n', 'tags': '', 'url': 'About.html'}, {'title': '課程教材', 'text': '', 'tags': '', 'url': '課程教材.html'}, {'title': '齒輪run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '齒輪run.html'}, {'title': 'HW1', 'text': 'HW1-1 \n HW1-2 \n HW1-3 \n HW1-4 \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': '設置ssh', 'text': '1. 點選資料夾的Portablegit →bin→sh.exe \n \n \n 2. 輸入ssh-keygen -t rsa -b 4096 -C "40832244"(需改成自己學號) \n 按enter →輸入/y/tmp/id_rsa → 連續按按2次enter \n \n \n 3. 下載putty_home、GitExtensions，將start_ipv4.bat移到白窗\xa0 並新增\xa0 \n \n \n \n \n 1 \n 2 \n \n \n \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n 4.打開.git資料夾，把config移到白窗，新增[remote "origin"]裡的url =  git@github.com:40832244/cp2021.git \n \n \n 5.打開Putty Key Generator，將鼠標在紅框中搖晃會產生鑰匙，並先將它複製站存於筆記本 \n \xa0 \xa0完成後點選save public key(private 需多設一個密碼) 名為 id_rsa \n \n 6.打開Putty Configuration並照著圖片更改 \n \n \n \n 7.點選SSH旁邊的加號點Auth，點Browse...點選檔案 \n 選去剛剛儲存的id_rsa(記得選成所有檔案才看的到) \n \n 8.回到第6.部頁面點save，進到github網頁setting的 SSH and GPG keys 新增一把鑰匙，並到記事本內將剛剛在 Putty Key Generator產生的鑰匙貼上，並檢查句尾是學號 \n \n 點選Add SSH key \n \n 完成!!!', 'tags': '', 'url': '設置ssh.html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'W12', 'text': 'w12.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Pull Request', 'text': '1.建立倉新倉庫 \n \n 2.依上面指令在小黑窗依次輸入(若未下載GIT要先下載) \n \n \n 3.創建一個Token，並複製連結 \n \n 4.將連結貼製config(要把config拉至小白窗)，然後就完成了! \n \n', 'tags': '', 'url': 'Pull Request.html'}, {'title': 'HW3', 'text': '', 'tags': '', 'url': 'HW3.html'}]};