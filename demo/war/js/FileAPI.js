
			getFilesFilter: function (filter){
				filter = typeof filter == 'string' ? filter : (filter.getAttribute && filter.getAttribute('accept') || '');

				if (!filter) {
					return /./;
				}

				// Sanitize filter to prevent ReDoS attacks
				// Only allow alphanumeric, dots, commas, hyphens, underscores, and forward slashes
				// Limit length to prevent excessively long patterns
				if (filter.length > 200) {
					return /./;
				}

				// Remove any characters that aren't safe for file extensions
				var sanitizedFilter = filter.replace(/[^a-zA-Z0-9.,\-_\/]/g, '');

				// If sanitization removed everything, return permissive regex
				if (!sanitizedFilter) {
					return /./;
				}

				// Split by comma, validate each extension, and rebuild safely
				var extensions = sanitizedFilter.split(',');
				var validExtensions = [];

				for (var i = 0; i < extensions.length; i++) {
					var ext = extensions[i].trim();
					// Only allow reasonable extension patterns (e.g., ".jpg", "image/jpeg", ".png")
					// Limit individual extension length
					if (ext && ext.length <= 50) {
						validExtensions.push(ext);
					}
				}

				// If no valid extensions, return permissive regex
				if (validExtensions.length === 0) {
					return /./;
				}

				// Build safe regex pattern
				var pattern = validExtensions.map(function(ext) {
					return ext.replace(/\./g, '\\.');
				}).join('|');

				return new RegExp('('+ pattern +')$', 'i');
			},


