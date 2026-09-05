return res.status(400).json({
      error: 'خطا در آپلود فایل'
    });

  }

  res.status(500).json({
    error: 'خطای داخلی سرور'
  });

});

// =========================
// UNKNOWN API ROUTE
// =========================

app.use(
  '/api',
  (req, res) => {

    res.status(404).json({
      error: 'API route not found'
    });

  }
);

// =========================
// START SERVER
// =========================

app.listen(
  PORT,
  '0.0.0.0',
  () => {

    console.log(
      MANGA FORGE is running on port ${PORT}
    );

  }
);