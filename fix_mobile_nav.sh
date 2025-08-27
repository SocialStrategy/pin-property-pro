#!/bin/bash

# List of files that need mobile navigation fixes
files=(
  "pages/contact.js"
  "pages/en/blog/[slug].js" 
  "pages/en/testimonials.js"
  "pages/testimonials.js"
  "pages/th/areas.js"
  "pages/th/bog/[slug].js"
  "pages/th/contact.js"
  "pages/th/testimonials.js"
  "pages/areas.js"
  "pages/blog/index.js"
  "pages/blog/[slug].js"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Add useState import if missing
    if ! grep -q "useState" "$file"; then
      sed -i '3i import { useState } from '\''react'\''' "$file"
    fi
    
    # Add Menu, X imports if missing  
    if ! grep -q "Menu, X" "$file"; then
      sed -i 's/} from '\''lucide-react'\''/Menu, X } from '\''lucide-react'\''/' "$file"
    fi
    
    # Add mobile menu state if missing
    if ! grep -q "mobileMenuOpen" "$file"; then
      sed -i '/const locale/a \ \ const [mobileMenuOpen, setMobileMenuOpen] = useState(false)' "$file"
    fi
    
    # Replace old navigation with responsive navigation
    sed -i 's/div className="flex items-center space-x-6"/div className="hidden md:flex items-center space-x-6"/' "$file"
    
  fi
done
