$(document).ready(function() {
	$(window).on('action:topic.loaded', function() {
		// Reduce post by 5% opacity for each downvote received
		var	posts = $('.posts li[data-pid]'),
			rep, opacity;

		posts.each(function(idx, postEl) {
			rep = parseInt($(postEl).find('[data-votes]').attr('data-votes'), 10);

			if (rep < 0) {
				opacity = 1 + (rep*.20);
				if (opacity < 0.1) {
					opacity = 0.1;
				}

				$(postEl).css('opacity', opacity);
			}
		});
	});
});