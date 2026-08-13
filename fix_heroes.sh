#!/bin/bash
for file in src/components/*.tsx; do
  if grep -q "aspect-\[4/3\]" "$file"; then
    echo "Fixing $file..."
    sed -i 's/aspect-\[4\/3\] lg:aspect-\[4\/3.5\] bg-border-grey relative overflow-hidden h-\[65%\] lg:h-\[75%\] lg:my-auto/aspect-video lg:aspect-[4\/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto/g' "$file"
  fi
done
