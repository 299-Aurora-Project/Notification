<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integrated Tool</title>
    <style>
        /* v. t.1.0.31 のスタイルを維持 */
        body {
            font-family: sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }

        /* 通知機能用の追加スタイル (v. t.1.1.12より継承) */
        #notification-banner {
            display: none;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            padding: 15px 30px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out;
        }
        @keyframes fadeInOut {
            0% { opacity: 0; top: 0; }
            15% { opacity: 1; top: 20px; }
            85% { opacity: 1; top: 20px; }
            100% { opacity: 0; top: 0; }
        }
    </style>
</head>
<body>

    <div id="notification-banner"></div>

    <div class="container">
        <h1>メインツール</h1>
        <p>現在のバージョン: v. t.1.1.13</p>
        <button id="action-btn">アクション実行</button>
    </div>

    <script>
        // 通知表示関数 (v. t.1.1.12の機能)
        function showNotification(message) {
            const banner = document.getElementById('notification-banner');
            banner.textContent = message;
            banner.style.display = 'block';
            
            setTimeout(() => {
                banner.style.display = 'none';
            }, 3000);
        }

        // v. t.1.0.31 の基本ロジックに通知を統合
        document.getElementById('action-btn').addEventListener('click', function() {
            // 元の処理をシミュレート
            console.log("Action performed");

            // 通知機能の呼び出し
            showNotification("処理が正常に完了しました！");
        });
    </script>
</body>
</html>
